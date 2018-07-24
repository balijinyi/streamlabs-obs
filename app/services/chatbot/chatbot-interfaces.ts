// state
export interface ChatbotApiServiceState {
  api_token: string;
  socket_token: string;
  default_commands_response: DafaultCommandsResponse;
  custom_commands_response: CustomCommandsResponse;
  timers_response: TimersResponse;
}

// responses
export interface ChatbotAPIPostResponse {
  success: boolean;
}

export interface ChatbotAPIPutResponse {
  success: boolean;
}


export interface DafaultCommandsResponse {
  commands: DafaultCommandsSlug;
  'link-protection': DafaultCommandsSlug;
  giveaway: DafaultCommandsSlug;
}

export interface CustomCommandsResponse {
  pagination: Pagination;
  data: CustomCommandsData;
}

export interface TimersResponse {
  pagination: Pagination;
  data: TimersData;
}


// shared
export interface Permission {
  level: number;
  info?: PermissionInfo;
}

export interface PermissionInfo {
  [id: string]: any;
}

export interface Cooldown {
  global: number;
  user: number;
}

export interface Aliases {
  [id: number]: string;
}

export interface Pagination {
  current: number;
  total: number;
}

// default commands
export interface DefaultCommand {
  command: string;
  description: string;
  aliases: Aliases;
  response_type: string;
  success_response?: string;
  failed_response?: string;
  response?: string;
  static_permission?: Permission;
  permission?: Permission;
  enabled?: boolean;
  enabled_response?: string;
  disabled_response?: string;
}

export interface DafaultCommandsSlug {
  [id: string]: DefaultCommand;
}

// custom commands
export interface CustomCommandsData {
  [id: number]: CustomCommand;
}


export interface CustomCommandRow {
  id?: string;
  user_id?: number;
  command: string;
  permission: Permission;
  response: string;
  response_type?: string;
  cooldowns: Cooldown;
  aliases: Aliases;
  platforms: number;
  enabled: boolean;
  created_at?: string;
  updated_at?: string;
}


export interface CustomCommand {
  id?: string;
  user_id?: number;
  command: string;
  permission: Permission;
  response: string;
  response_type?: string;
  cooldowns: Cooldown;
  aliases: Aliases;
  platforms: number;
  enabled: boolean;
  created_at?: string;
  updated_at?: string;
}

// timers
export interface TimersData {
  [id: number]: Timer;
}

export interface Timer {
  id?: string;
  user_id?: number;
  name: string;
  interval: number;
  chat_lines: number;
  message: string;
  platforms: number;
  enabled: boolean;
  created_at?: string;
  updated_at?: string;
}

// dictionaries
export enum ChatbotPermissions {
  None = 0,
  Viewer = 1,
  Subscriber = 1 << 1,
  Moderator = 1 << 5,
  Broadcaster = 1 << 7,
  All = Viewer | Subscriber | Moderator | Broadcaster
}

export enum ChatbotResponseTypes {
  Chat = 'Chat',
  Whisper = 'Whisper'
}