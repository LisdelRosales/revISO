import { User } from '../data/mockData';

// Simple auth context/store
let currentUser: User | null = null;

export function setUser(user: User | null): void {
  currentUser = user;
}

export function getUser(): User | null {
  return currentUser;
}

export function isAuthenticated(): boolean {
  return currentUser !== null;
}

export function isAdmin(): boolean {
  return currentUser?.role === 'admin';
}

export function isClient(): boolean {
  return currentUser?.role === 'company';
}

