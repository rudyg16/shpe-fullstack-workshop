'use client';
// PSEUDOCODE: Client component for browser navigation APIs
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  // PSEUDOCODE: Automatically redirect root page to dashboard on load
  const router = useRouter();
  
  useEffect(() => {
    router.push('/dashboard');
  }, [router]);
  
  return <div>Redirecting to dashboard...</div>;
}