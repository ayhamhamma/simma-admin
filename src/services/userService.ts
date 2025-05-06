import { User } from '../interfaces/user';

// Mock data for admin users
const mockUsers: User[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@simma.com',
    role: 'Administrator',
    createdAt: '2023-01-15T09:30:00Z',
  },
  {
    id: '2',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@simma.com',
    role: 'Editor',
    createdAt: '2023-02-20T14:45:00Z',
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Brown',
    email: 'michael.brown@simma.com',
    role: 'Viewer',
    createdAt: '2023-03-10T11:15:00Z',
  },
  {
    id: '4',
    firstName: 'Emma',
    lastName: 'Davis',
    email: 'emma.davis@simma.com',
    role: 'Administrator',
    createdAt: '2023-04-05T16:20:00Z',
  },
  {
    id: '5',
    firstName: 'James',
    lastName: 'Wilson',
    email: 'james.wilson@simma.com',
    role: 'Editor',
    createdAt: '2023-05-12T10:00:00Z',
  },
];

export const userService = {
  getUsers: (): Promise<User[]> => {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockUsers), 500);
    });
  },

  searchUsers: (query: string): Promise<User[]> => {
    // Filter users based on query
    const filteredUsers = mockUsers.filter(
      (user) =>
        user.firstName.toLowerCase().includes(query.toLowerCase()) ||
        user.lastName.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase()) ||
        user.role.toLowerCase().includes(query.toLowerCase())
    );

    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(filteredUsers), 500);
    });
  },

  deleteUser: (id: string): Promise<boolean> => {
    // In a real implementation, this would call an API to delete the user
    console.log(`Delete user with ID: ${id}`);
    
    // Simulate API call delay and always return success
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 500);
    });
  },
}; 