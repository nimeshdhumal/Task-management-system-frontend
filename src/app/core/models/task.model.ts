export interface Task {
    title: string;
    description: string;
    status: string;
    priority: string;
    dueDate: Date;
}

export interface TaskResponseData {
    id: number;
    title: string;
    description: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}
export interface TaskResponse {
    success: boolean;
    message: string;
    data: TaskResponseData;
}