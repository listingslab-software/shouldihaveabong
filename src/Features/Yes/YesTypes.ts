export interface YesState {
    value: number;
    status: 'idle' | 'loading' | 'failed';
    endpoint: string;
    fetched: boolean;
    fetching: boolean;
  }