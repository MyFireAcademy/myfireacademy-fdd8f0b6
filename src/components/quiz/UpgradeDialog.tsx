
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface UpgradeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onResponse: (wantsToUpgrade: boolean) => void;
}

const UpgradeDialog: React.FC<UpgradeDialogProps> = ({ 
  open, 
  onOpenChange,
  onResponse 
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-center">Ready to Pass Your Exam?</DialogTitle>
          <DialogDescription className="text-center">
            Would you like to unlock the full 2025 Exam Prep with 200 practice questions?
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-center text-navy-700">
            Get complete access to both Level I and Level II certification exam questions with detailed explanations.
          </p>
        </div>
        <DialogFooter className="sm:justify-center sm:space-x-4 sm:flex-row">
          <Button 
            variant="secondary"
            onClick={() => onResponse(false)}
          >
            Not now
          </Button>
          <Button
            className="bg-fire-600 hover:bg-fire-700 text-white" 
            onClick={() => onResponse(true)}
          >
            Yes, get full access
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpgradeDialog;
