import { RegularUser } from '../interfaces/regularUser';

// Mock data for regular application users
const mockRegularUsers: RegularUser[] = [
  {
    id: '1',
    firstName: 'Ahmed',
    lastName: 'Hassan',
    phoneNumber: '+964 750 123 4567',
    email: 'ahmed.hassan@gmail.com',
    createdAt: '2023-06-10T14:30:00Z',
  },
  {
    id: '2',
    firstName: 'Mohammed',
    lastName: 'Ali',
    phoneNumber: '+964 751 987 6543',
    email: 'mohammed.ali@yahoo.com',
    createdAt: '2023-07-22T09:15:00Z',
  },
  {
    id: '3',
    firstName: 'Fatima',
    lastName: 'Ibrahim',
    phoneNumber: '+964 770 456 7890',
    email: 'fatima.ibrahim@hotmail.com',
    createdAt: '2023-08-05T16:45:00Z',
  },
  {
    id: '4',
    firstName: 'Zahra',
    lastName: 'Omar',
    phoneNumber: '+90 532 987 6543',
    email: 'zahra.omar@gmail.com',
    createdAt: '2023-09-12T11:20:00Z',
  },
  {
    id: '5',
    firstName: 'Yusuf',
    lastName: 'Mahmoud',
    phoneNumber: '+90 555 123 4567',
    email: 'yusuf.mahmoud@outlook.com',
    createdAt: '2023-10-03T08:40:00Z',
  },
  {
    id: '6',
    firstName: 'Layla',
    lastName: 'Hussein',
    phoneNumber: '+964 780 222 3333',
    email: 'layla.hussein@gmail.com',
    createdAt: '2023-11-18T13:10:00Z',
  },
  {
    id: '7',
    firstName: 'Omar',
    lastName: 'Kareem',
    phoneNumber: '+90 546 789 0123',
    email: 'omar.kareem@yahoo.com',
    createdAt: '2023-12-07T10:30:00Z',
  },
  {
    id: '8',
    firstName: 'Sara',
    lastName: 'Ahmed',
    phoneNumber: '+964 773 444 5555',
    email: 'sara.ahmed@hotmail.com',
    createdAt: '2024-01-20T15:25:00Z',
  },
];

export const regularUserService = {
  getUsers: (): Promise<RegularUser[]> => {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockRegularUsers), 500);
    });
  },

  searchUsers: (
    firstName: string = '',
    lastName: string = '',
    phoneNumber: string = ''
  ): Promise<RegularUser[]> => {
    // Filter users based on search criteria
    const filteredUsers = mockRegularUsers.filter((user) => {
      const matchFirstName = firstName
        ? user.firstName.toLowerCase().includes(firstName.toLowerCase())
        : true;
      const matchLastName = lastName
        ? user.lastName.toLowerCase().includes(lastName.toLowerCase())
        : true;
      const matchPhoneNumber = phoneNumber
        ? user.phoneNumber.includes(phoneNumber)
        : true;

      return matchFirstName && matchLastName && matchPhoneNumber;
    });

    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(filteredUsers), 500);
    });
  },

  getUserById: (id: string): Promise<RegularUser | null> => {
    const user = mockRegularUsers.find((u) => u.id === id);
    
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(user || null), 300);
    });
  },
}; 