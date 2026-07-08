"use client";

import { useState, useRef } from "react";
import { Camera, ImageIcon, Loader2, Trash2, AlertCircle, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { AnalyzeImageResponse } from "@/types/api";

type ImageAnalyzerProps = {
  onAnalysisComplete: (data: AnalyzeImageResponse) => void;
  existingAnalysis: AnalyzeImageResponse | null;
};

const loadingMessages = [
  "Analyzing waste...",
  "Estimating volume...",
  "Evaluating hazards...",
  "Preparing operational assessment...",
];

function getHazardBadgeColor(level: string) {
  switch (level.toLowerCase()) {
    case "critical": return "bg-red-600 text-white";
    case "high": return "bg-orange-500 text-white";
    case "medium": return "bg-yellow-500 text-black";
    case "low": return "bg-green-500 text-white";
    default: return "";
  }
}

function getHealthBadgeColor(risk: string) {
  switch (risk.toLowerCase()) {
    case "high": return "bg-red-100 text-red-800 border-red-200";
    case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "low": return "bg-green-100 text-green-800 border-green-200";
    default: return "";
  }
}

function getScoreColor(score: number) {
  if (score >= 76) return "text-red-600";
  if (score >= 51) return "text-orange-500";
  if (score >= 26) return "text-yellow-500";
  return "text-green-500";
}

export function ImageAnalyzer({ onAnalysisComplete, existingAnalysis }: ImageAnalyzerProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalyzeImageResponse | null>(existingAnalysis);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileSelect(file: File | null) {
    setError(null);
    if (!file) {
      setSelectedFile(null);
      setPreviewUrl(null);
      return;
    }
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file (JPEG, PNG, etc.)");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError("Image must be smaller than 10 MB");
      return;
    }
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setResult(null);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    handleFileSelect(file);
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave() {
    setIsDragging(false);
  }

  function clearImage() {
    setSelectedFile(null);
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setResult(null);
    setError(null);
    setIsAnalyzing(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function analyzeImage() {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    setError(null);
    setLoadingStep(0);

    const stepInterval = setInterval(() => {
      setLoadingStep((prev) => Math.min(prev + 1, loadingMessages.length - 1));
    }, 2000);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/analyze-image`, {
        method: "POST",
        body: formData,
      });

      clearInterval(stepInterval);

      if (!response.ok) {
        throw new Error("Unable to analyze image.");
      }

      const data = (await response.json()) as AnalyzeImageResponse;
      setResult(data);
      onAnalysisComplete(data);
    } catch {
      clearInterval(stepInterval);
      setError("Unable to analyze image. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  }

  return (
    <Card className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <CardHeader className="border-b-2 border-black bg-yellow-100">
        <CardTitle className="flex items-center gap-2 text-base">
          <Camera className="size-5" />
          AI Waste Assessment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-5">
        {/* Upload zone */}
        {!previewUrl && !isAnalyzing && (
          <div
            className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 transition-colors ${
              isDragging
                ? "border-black bg-yellow-50"
                : "border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50"
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="mb-3 size-10 text-gray-400" />
            <p className="text-sm font-medium">Drop an image here or click to upload</p>
            <p className="mt-1 text-xs text-muted-foreground">JPEG, PNG, WebP — max 10 MB</p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileSelect(e.target.files?.[0] ?? null)}
            />
          </div>
        )}

        {/* Preview */}
        {previewUrl && !isAnalyzing && (
          <div className="relative">
            <img
              src={previewUrl}
              alt="Uploaded waste"
              className="max-h-64 w-full rounded-lg border-2 border-black object-cover"
            />
            <button
              onClick={clearImage}
              className="absolute right-2 top-2 rounded-full border-2 border-black bg-white p-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors hover:bg-red-50"
              title="Remove image"
            >
              <Trash2 className="size-4" />
            </button>
          </div>
        )}

        {/* Analyze / Retry button */}
        {previewUrl && !isAnalyzing && (
          <Button
            className="h-11 w-full border-2 border-black font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
            onClick={analyzeImage}
          >
            {result ? "Re-analyze with AI" : "Analyze with AI"}
          </Button>
        )}

        {/* Loading state */}
        {isAnalyzing && (
          <div className="space-y-3 rounded-lg border-2 border-black bg-blue-50 p-5">
            <div className="flex items-center gap-3">
              <Loader2 className="size-5 animate-spin text-blue-600" />
              <p className="font-semibold text-blue-800">Analyzing image...</p>
            </div>
            <ul className="space-y-1 pl-7">
              {loadingMessages.map((msg, i) => (
                <li
                  key={msg}
                  className={`text-sm ${
                    i <= loadingStep ? "text-blue-700 font-medium" : "text-blue-400"
                  }`}
                >
                  {i <= loadingStep ? "✓" : "○"} {msg}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex items-start gap-3 rounded-lg border-2 border-red-500 bg-red-50 p-4">
            <AlertCircle className="mt-0.5 size-5 shrink-0 text-red-600" />
            <div>
              <p className="text-sm font-semibold text-red-800">Analysis failed</p>
              <p className="mt-1 text-sm text-red-600">{error}</p>
            </div>
          </div>
        )}

        {/* Results */}
        {result && !isAnalyzing && !error && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <ResultCard
                label="Waste Type"
                value={result.waste_type}
                highlight
              />
              <ResultCard
                label="Hazard Level"
                value={result.hazard_level}
                badge
                badgeColor={getHazardBadgeColor(result.hazard_level)}
              />
              <ResultCard
                label="Estimated Volume"
                value={result.estimated_volume}
              />
              <ResultCard
                label="Priority Score"
                value={`${result.priority_score}/100`}
                customColor={getScoreColor(result.priority_score)}
              />
              <ResultCard
                label="Public Health Risk"
                value={result.public_health_risk}
                badge
                badgeColor={getHealthBadgeColor(result.public_health_risk)}
              />
              <ResultCard
                label="Environmental Risk"
                value={result.environmental_risk}
                badge
                badgeColor={getHealthBadgeColor(result.environmental_risk)}
              />
              <ResultCard
                label="Workers Required"
                value={`${result.recommended_workers}`}
              />
              <ResultCard
                label="Vehicle"
                value={result.recommended_vehicle}
                highlight
              />
              <ResultCard
                label="Cleanup Time"
                value={result.estimated_cleanup_time}
              />
            </div>

            {/* Reasoning */}
            <div className="rounded-lg border-2 border-black bg-gray-50 p-4">
              <p className="mb-2 text-sm font-bold">AI Reasoning</p>
              <ul className="space-y-1.5">
                {result.reasoning.map((r, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-0.5 shrink-0 text-yellow-600">◆</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

type ResultCardProps = {
  label: string;
  value: string;
  highlight?: boolean;
  badge?: boolean;
  badgeColor?: string;
  customColor?: string;
};

function ResultCard({ label, value, highlight, badge, badgeColor, customColor }: ResultCardProps) {
  const isUnknown = value.toLowerCase().includes("cannot determine");

  return (
    <div className={`rounded-lg border-2 p-3 ${isUnknown ? "border-gray-200 bg-gray-50" : highlight ? "border-black bg-yellow-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" : "border-black bg-white"}`}>
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
      {badge ? (
        <Badge className={`${badgeColor || ""} border border-black`}>{value}</Badge>
      ) : (
        <p className={`font-bold ${customColor || (isUnknown ? "text-gray-400 italic" : "")}`}>
          {value}
        </p>
      )}
    </div>
  );
}
