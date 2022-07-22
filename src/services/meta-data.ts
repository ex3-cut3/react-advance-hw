export const BASE_URL = 'https://travel-app-api.glitch.me/api/v1';

export interface loggingInterface {
   user: {
      id: string,
      fullName: string,
      email: string,
      createdAt: string
   },
   token: string
}
export interface errorInt {
   statusCode: number,
   error: string,
   message: string
}

export interface signUpInterface extends signInInterface{
   fullName: string,
}

export interface loggedUser extends signUpInterface {
   id: string
}

export interface signInInterface {
   email: string,
   password: string
}

export interface bookingInterface {
   id: string,
   userId: string,
   tripId: string,
   guests: number,
   date: string,
   trip: {
      title: string,
      duration: number,
      price: number
   },
   totalPrice: number,
   createdAt: string
}

export interface interactBookingInterface {
   tripId: string,
   userId: string,
   guests: number,
   date: string
}
