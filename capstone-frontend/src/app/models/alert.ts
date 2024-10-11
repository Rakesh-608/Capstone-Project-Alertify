export interface Alert {
    title: string;
    description: string;
    severity: string;
    effectiveUtc: string;
    effectiveLocal: string;
    expiresUtc: string;
    expiresLocal: string;
    onsetUtc: string;
    onsetLocal: string;
    endsUtc: string;
    endsLocal: string;
    uri: string;
    regions: string[];
  }
  
