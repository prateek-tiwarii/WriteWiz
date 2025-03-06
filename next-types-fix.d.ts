import { NextRequest } from 'next/server';

declare module 'next/server' {
  interface RequestContext {
    params: Record<string, string>;
  }
}