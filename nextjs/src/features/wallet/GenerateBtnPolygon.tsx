import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface IProps {
  generatePolygonKeyValuePair: () => void;
  loading: boolean;
}

const GenerateButtonPolygon = ({ generatePolygonKeyValuePair, loading }: IProps) => (
<div className="my-3 flex items-center justify-between w-full">
  <div className="flex items-center">
    <Label htmlFor="generateKey">Generate private key</Label>
    <span className="text-destructive text-xs">*</span>
  </div>

  <Button
    id="generateKey"
    type="button"
    isLoading={loading}
    className="ml-4"
    onClick={generatePolygonKeyValuePair}
  >
    Generate
  </Button>
</div>
);

export default GenerateButtonPolygon;