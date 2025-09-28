import { Construction, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface UnderDevelopmentProps {
  title?: string;
  description?: string;
  showBackButton?: boolean;
}

const UnderDevelopment = ({
  title = "Under Development",
  description = "This feature is currently under development. Check back soon for updates!",
  showBackButton = true
}: UnderDevelopmentProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <Construction className="size-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-semibold text-foreground mb-2">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>

        {showBackButton && (
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="gap-2"
          >
            <ArrowLeft className="size-4" />
            Go Back
          </Button>
        )}
      </div>
    </div>
  );
};

export { UnderDevelopment };