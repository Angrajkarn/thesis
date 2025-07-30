import { GraduationCap } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center justify-center -ml-2.5">
      <GraduationCap className="h-8 w-8 text-primary" />
      <span className="ml-2 text-xl font-bold tracking-tight text-foreground">
        Thesis Writer
      </span>
    </div>
  );
}
