import React from "react";
import { Button } from "@/components";

interface LoadMoreBlockProps {
  onClick: () => void;
}

const LoadMoreBlock: React.FC<LoadMoreBlockProps> = ({ onClick }) => (
  <div className="flex justify-center pt-4">
    <Button variant="link" className="px-8" onClick={onClick}>
      Load More Errands
    </Button>
  </div>
);

export default LoadMoreBlock;
