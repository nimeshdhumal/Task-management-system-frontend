export interface LoginCredentials {
    email: string;
    password: string;
}

export interface UserInfo {
    id: number;
    name: string;
    email: string;
    role: string;
}

export interface LoginResponseDetails {
    success: boolean;
    message: string;
    token: string;
    user: UserInfo;
}

export interface LoginResponse {
    status: boolean;
    message: LoginResponseDetails;
}