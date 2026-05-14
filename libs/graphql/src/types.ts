import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
  JSONObject: { input: any; output: any; }
};

export type BinaryFile = {
  __typename?: 'BinaryFile';
  createdAt: Scalars['DateTime']['output'];
  /** Date when the file was soft-deleted */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** Whether the file is private and requires signed URL to access */
  isPrivate: Scalars['Boolean']['output'];
  /** File location. Can be an S3-compatible storage or a custom URL */
  location: FileLocation;
  meta: BinaryFileMeta;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type BinaryFileMeta = {
  __typename?: 'BinaryFileMeta';
  /** File mime type (e.g. "application/pdf") */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** Orgiginal file name (e.g. "my-file.pdf") */
  name?: Maybe<Scalars['String']['output']>;
  /** File size in bytes (e.g. 203452) */
  size?: Maybe<Scalars['Int']['output']>;
};

export type BinaryFileMetaInput = {
  /** File mime type (e.g. "application/pdf") */
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** Orgiginal file name (e.g. "my-file.pdf") */
  name?: InputMaybe<Scalars['String']['input']>;
  /** File size in bytes (e.g. 203452) */
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type ChangePasswordInput = {
  /** Old user password */
  oldPassword: Scalars['String']['input'];
  /** New user password */
  password: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ChangeUserEmailInput = {
  /** New email address */
  newEmail: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ConfigureOtpInput = {
  userId: Scalars['String']['input'];
};

export type ConfigureOtpPayload = {
  __typename?: 'ConfigureOtpPayload';
  /** The URL to use for configuring One-Time Password Authentificator in the user's OTP app. */
  otpAuthUrl: Scalars['String']['output'];
  /** The secret key to use for generating OTP codes. */
  secret: Scalars['String']['output'];
  user: User;
};

export type CreateBinaryFileInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  /** Optional file ID, generated if not provided */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Whether the file is private and requires signed URL to access */
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  meta: BinaryFileMetaInput;
  /** URL to the file */
  url: Scalars['String']['input'];
};

export type CreateImageInput = {
  /** Image id (e.g. "hcimg:289gjfhslertu"). Is optional because it is generated automatically */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Each rendition is a different size of the same image */
  renditions?: InputMaybe<Array<ImageRenditionInput>>;
};

export type CreateImageRenditionInput = {
  /** Image ID (e.g. "hcimg:289gjfhslertu") */
  imageId: Scalars['String']['input'];
  meta: CreateImageRenditionMetaInput;
  type: ImageRenditionType;
  /** Image rendition url (e.g. "https://cdn.hicetnunc.xyz/objkt/289gjfhslertu/1.jpg") */
  url: Scalars['String']['input'];
};

export type CreateImageRenditionMetaInput = {
  /** Rendition file size in bytes (e.g. 20394) */
  filesize: Scalars['Float']['input'];
  /** Rendition height in pixels (e.g. 1080) */
  height: Scalars['Int']['input'];
  /** Rendition mime type (e.g. "image/jpeg") */
  mimeType: Scalars['String']['input'];
  /** Rendition width in pixels (e.g. 1920) */
  width: Scalars['Int']['input'];
};

export type CreateUserInput = {
  avatarId?: InputMaybe<Scalars['String']['input']>;
  /** e.g. "john.doe@example.com" */
  email: Scalars['String']['input'];
  /** e.g. "John" */
  firstName: Scalars['String']['input'];
  /** e.g. "Doe" */
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateUserRoleInput = {
  roleId: SystemRole;
  userId: Scalars['String']['input'];
};

export type DeleteImageInput = {
  id: Scalars['String']['input'];
};

export type DeleteImagePayload = {
  __typename?: 'DeleteImagePayload';
  id: Scalars['String']['output'];
};

export type DeleteUserInput = {
  id: Scalars['String']['input'];
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  id: Scalars['String']['output'];
};

export type DeleteUserRoleInput = {
  id: Scalars['String']['input'];
};

export type DeleteUserRolePayload = {
  __typename?: 'DeleteUserRolePayload';
  id: Scalars['String']['output'];
};

export type Disable2faInput = {
  userId: Scalars['String']['input'];
};

export type Disable2faPayload = {
  __typename?: 'Disable2faPayload';
  user: User;
};

export type DisableOtpInput = {
  userId: Scalars['String']['input'];
};

export type DisableOtpPayload = {
  __typename?: 'DisableOtpPayload';
  user: User;
};

export type FileLocation = {
  type: FileLocationType;
};

export enum FileLocationType {
  CUSTOM = 'CUSTOM',
  S3 = 'S3'
}

export type Image = {
  __typename?: 'Image';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  renditions: Array<ImageRendition>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ImageRendition = {
  __typename?: 'ImageRendition';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  image: Image;
  location: Scalars['JSONObject']['output'];
  meta: ImageRenditionMeta;
  type: ImageRenditionType;
  url: Scalars['String']['output'];
};

export type ImageRenditionInput = {
  /** Image rendition id (e.g. "hcimgr:289gjfhslertu"). Is optional because it is generated automatically */
  id?: InputMaybe<Scalars['String']['input']>;
  meta: CreateImageRenditionMetaInput;
  /** Image rendition type for different image sizes (e.g. "MAIN") */
  type: ImageRenditionType;
  /** Image file url (e.g. "https://cdn.holistic-cms.com/289gjfhslertu.jpg") */
  url: Scalars['String']['input'];
};

export type ImageRenditionMeta = {
  __typename?: 'ImageRenditionMeta';
  filesize: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  mimeType: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export enum ImageRenditionType {
  MAIN = 'MAIN',
  MAIN_2X = 'MAIN_2X',
  MAIN_LEGACY = 'MAIN_LEGACY',
  ORIGINAL = 'ORIGINAL',
  SMALL = 'SMALL'
}

export type LoginInput = {
  /** e.g. "john.doe@example.com" */
  email: Scalars['String']['input'];
  /** e.g. "qwerty1234" */
  password: Scalars['String']['input'];
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password with old password */
  changePassword: Scalars['Boolean']['output'];
  /** Change user email */
  changeUserEmail: User;
  /** Configure One-Time Password for a user. Generates secret key and OTP auth URL. */
  configureOtp: ConfigureOtpPayload;
  createBinaryFile: BinaryFile;
  createImage: Image;
  createImageRendition: ImageRendition;
  /** Send password recovery email */
  createPasswordRecoveryRequest: Scalars['Boolean']['output'];
  createUser: User;
  createUserRole: UserRole;
  deleteImage: DeleteImagePayload;
  deleteUser: DeleteUserPayload;
  deleteUserRole: DeleteUserRolePayload;
  /** Disable Two-Factor Authentication for a user. This also disables OTP. */
  disable2fa: Disable2faPayload;
  /** Disable One-Time Password authentication for a user. */
  disableOtp: DisableOtpPayload;
  /**
   * The login mutation allows users to securely authenticate themselves
   *     within the application using their email and password.
   */
  login: LoginPayload;
  /** Logout user from current session */
  logout: Scalars['Boolean']['output'];
  /** Logout user from all other devices (keeps current session) */
  logoutFromAllDevices: Scalars['Boolean']['output'];
  /** Recover password with new password and token */
  recoverPassword: Scalars['Boolean']['output'];
  /** Register a new user with email and password */
  register: RegisterPayload;
  /** Enable or disable push notifications for the current user */
  setMyPushNotifications: User;
  /** Create test user with faker data and optional role assignment. Only available when APP_ENV=local. */
  testCreateUser: User;
  /** Permanently delete user with sessions and user_roles for E2E tests. Only available when APP_ENV=local. */
  testDeleteUserPermanently: TestDeleteUserPermanentlyResult;
  /** Test login for Playwright E2E tests. Only available when APP_ENV=local. Bypasses password/2FA. */
  testLogin: User;
  updateImage: Image;
  updateImageRendition: ImageRendition;
  updateUser: User;
  updateUserRole: UserRole;
  /** Validate One-Time Password code. Sets auth cookies if the code is valid */
  validateOtp: ValidateOtpPayload;
  /** Verify One-Time Password code first time. Enables OTP for the use if the code is valid */
  verifyOtp: VerifyOtpPayload;
  /** Verify password recovery token from email */
  verifyPasswordRecoveryToken: Scalars['Boolean']['output'];
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationChangeUserEmailArgs = {
  input: ChangeUserEmailInput;
};


export type MutationConfigureOtpArgs = {
  input: ConfigureOtpInput;
};


export type MutationCreateBinaryFileArgs = {
  input: CreateBinaryFileInput;
};


export type MutationCreateImageArgs = {
  input: CreateImageInput;
};


export type MutationCreateImageRenditionArgs = {
  input: CreateImageRenditionInput;
};


export type MutationCreatePasswordRecoveryRequestArgs = {
  input: SendPasswordRecoveryEmailInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateUserRoleArgs = {
  input: CreateUserRoleInput;
};


export type MutationDeleteImageArgs = {
  input: DeleteImageInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteUserRoleArgs = {
  input: DeleteUserRoleInput;
};


export type MutationDisable2faArgs = {
  input: Disable2faInput;
};


export type MutationDisableOtpArgs = {
  input: DisableOtpInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRecoverPasswordArgs = {
  input: RecoverPasswordInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationSetMyPushNotificationsArgs = {
  input: SetMyPushNotificationsInput;
};


export type MutationTestCreateUserArgs = {
  input: TestCreateUserInput;
};


export type MutationTestDeleteUserPermanentlyArgs = {
  userId: Scalars['String']['input'];
};


export type MutationTestLoginArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateImageArgs = {
  input: UpdateImageInput;
};


export type MutationUpdateImageRenditionArgs = {
  input: UpdateImageRenditionInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateUserRoleArgs = {
  input: UpdateUserRoleInput;
};


export type MutationValidateOtpArgs = {
  input: ValidateOtpInput;
};


export type MutationVerifyOtpArgs = {
  input: VerifyOtpInput;
};


export type MutationVerifyPasswordRecoveryTokenArgs = {
  input: VerifyPasswordRecoveryInput;
};

export type OffsetPaginationPageInfo = {
  __typename?: 'OffsetPaginationPageInfo';
  /** The amount of items to be requested per page */
  limit: Scalars['Int']['output'];
  /** The current page */
  page: Scalars['Int']['output'];
  /** The total amount of items */
  totalItems: Scalars['Int']['output'];
  /** The total amount of pages (total items / limit) */
  totalPages: Scalars['Int']['output'];
};

export type PaginatedUserRoles = {
  __typename?: 'PaginatedUserRoles';
  /** The items of the current page */
  items: Array<UserRole>;
  pageInfo: OffsetPaginationPageInfo;
};

export type PaginatedUsers = {
  __typename?: 'PaginatedUsers';
  /** The items of the current page */
  items: Array<User>;
  pageInfo: OffsetPaginationPageInfo;
};

export type Query = {
  __typename?: 'Query';
  binaryFile: BinaryFile;
  binaryFilesByIds: Array<BinaryFile>;
  image: Image;
  /** Get current user with given access token */
  me: User;
  roles: Array<Role>;
  user: User;
  /** Get user basic info by id or email. Returns null if not found. */
  userInfo?: Maybe<UserBasicInfo>;
  /** Get user by id or email. Returns null if not found. */
  userOrNull?: Maybe<User>;
  userRole: UserRole;
  userRoles: PaginatedUserRoles;
  users: PaginatedUsers;
};


export type QueryBinaryFileArgs = {
  id: Scalars['String']['input'];
};


export type QueryBinaryFilesByIdsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type QueryImageArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserInfoArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserOrNullArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserRoleArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserRolesArgs = {
  filter?: InputMaybe<UserRolesFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: UserRolesOrderBy;
  page?: Scalars['Int']['input'];
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UsersFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: UsersOrderBy;
  page?: Scalars['Int']['input'];
};

export type RecoverPasswordInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type RegisterInput = {
  /** e.g. "https://example.com/avatar.png" */
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  /** e.g. "john.doe@example.com" */
  email: Scalars['String']['input'];
  /** e.g. "John" */
  firstName: Scalars['String']['input'];
  /** Invite token for secure registration (required for pre-invited users) */
  inviteToken?: InputMaybe<Scalars['String']['input']>;
  /** e.g. "Doe" */
  lastName: Scalars['String']['input'];
  /** e.g. "+380501234567" */
  mobilePhone: Scalars['String']['input'];
  /** e.g. "hcorg:xj29go2lhfir" */
  organizationId?: InputMaybe<Scalars['String']['input']>;
  /** Minimum 12 characters, including uppercase, lowercase, numbers, and symbols */
  password: Scalars['String']['input'];
  /** Who referred the user to the system? */
  referrer?: InputMaybe<Scalars['String']['input']>;
};

export type RegisterPayload = {
  __typename?: 'RegisterPayload';
  user: User;
};

export type Role = {
  __typename?: 'Role';
  description?: Maybe<Scalars['String']['output']>;
  id: SystemRole;
  permissions: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: RoleType;
};

export enum RoleType {
  SYSTEM = 'SYSTEM'
}

export type SendPasswordRecoveryEmailInput = {
  email: Scalars['String']['input'];
};

export type SessionLoggedOutPayload = {
  __typename?: 'SessionLoggedOutPayload';
  logoutAt: Scalars['DateTime']['output'];
  /** SHA256 hash of the logged out session ID */
  sessionHash: Scalars['String']['output'];
};

export type SetMyPushNotificationsInput = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Notifies when current session is logged out (for cross-tab sync) */
  sessionLoggedOut: SessionLoggedOutPayload;
};


export type SubscriptionSessionLoggedOutArgs = {
  sessionHash: Scalars['String']['input'];
};

export enum SystemRole {
  AUTHORIZED = 'AUTHORIZED',
  GUEST = 'GUEST',
  SUPERADMIN = 'SUPERADMIN'
}

export type TestCreateUserInput = {
  password?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<SystemRole>;
};

export type TestDeleteUserPermanentlyResult = {
  __typename?: 'TestDeleteUserPermanentlyResult';
  sessionsDeleted: Scalars['Float']['output'];
  success: Scalars['Boolean']['output'];
  userId: Scalars['String']['output'];
  userRolesDeleted: Scalars['Float']['output'];
};

export type UpdateImageInput = {
  id: Scalars['String']['input'];
};

export type UpdateImageRenditionInput = {
  /** Image rendition ID to update */
  id: Scalars['String']['input'];
  meta?: InputMaybe<UpdateImageRenditionMetaInput>;
  /** Image rendition type for different image sizes (e.g. "MAIN") */
  type?: InputMaybe<ImageRenditionType>;
  /** Image rendition URL (e.g. "https://cdn.hicetnunc.xyz/objkt/1234/1.jpg") */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateImageRenditionMetaInput = {
  /** Rendition file size in bytes (e.g. 20394) */
  filesize?: InputMaybe<Scalars['Float']['input']>;
  /** Rendition height in pixels (e.g. 1080) */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** Rendition mime type (e.g. "image/jpeg") */
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** Rendition width in pixels (e.g. 1920) */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateUserInput = {
  avatarId?: InputMaybe<Scalars['String']['input']>;
  /** e.g. "John" */
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  /** e.g. "Doe" */
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserRoleInput = {
  id: Scalars['String']['input'];
  roleId?: InputMaybe<SystemRole>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Image>;
  avatarId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  is2faEnabled?: Maybe<Scalars['Boolean']['output']>;
  isMe: Scalars['Boolean']['output'];
  isOtpEnabled?: Maybe<Scalars['Boolean']['output']>;
  lastName: Scalars['String']['output'];
  permissions: Array<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  preferred2faMethod?: Maybe<User2faMethod>;
  pushNotificationsEnabled: Scalars['Boolean']['output'];
  resolvedPermissions: Array<Scalars['JSONObject']['output']>;
  roles: Array<Role>;
  /** SHA256 hash of current session ID (only for current user) */
  sessionHash?: Maybe<Scalars['String']['output']>;
  status: UserStatus;
  type: UserType;
};

export enum User2faMethod {
  AUTHENTICATOR = 'AUTHENTICATOR',
  PASSKEY = 'PASSKEY'
}

export type UserBasicInfo = {
  __typename?: 'UserBasicInfo';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
};

export type UserRole = {
  __typename?: 'UserRole';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  roleId: SystemRole;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type UserRolesFilter = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  roleIds?: InputMaybe<Array<SystemRole>>;
  userIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum UserRolesOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC'
}

/** Users has multiple statuses including ACTIVE, DISABLED, and DELETED. */
export enum UserStatus {
  ACTIVE = 'ACTIVE',
  ARCHIVED = 'ARCHIVED',
  DELETED = 'DELETED',
  DISABLED = 'DISABLED',
  WAITING_FOR_APPROVAL = 'WAITING_FOR_APPROVAL',
  WAITING_FOR_SIGNUP = 'WAITING_FOR_SIGNUP'
}

/** Users has two types: USER (Regular user) and SA (Service account). */
export enum UserType {
  SA = 'SA',
  USER = 'USER'
}

export type UsersFilter = {
  exceptIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** List of certain users ids */
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Search query (search by email, first name, last name) */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Find users by statuses */
  statuses?: InputMaybe<Array<UserStatus>>;
  /** Find USER or SA (service account) */
  type?: UserType;
};

export enum UsersOrderBy {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  email_ASC = 'email_ASC',
  email_DESC = 'email_DESC',
  fullName_ASC = 'fullName_ASC',
  fullName_DESC = 'fullName_DESC'
}

export type ValidateOtpInput = {
  token: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type ValidateOtpPayload = {
  __typename?: 'ValidateOtpPayload';
  user: User;
};

export type VerifyOtpInput = {
  token: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type VerifyOtpPayload = {
  __typename?: 'VerifyOtpPayload';
  user: User;
};

export type VerifyPasswordRecoveryInput = {
  token: Scalars['String']['input'];
};

export type CreatePasswordRecoveryRequestMutationVariables = Exact<{
  input: SendPasswordRecoveryEmailInput;
}>;


export type CreatePasswordRecoveryRequestMutation = { __typename?: 'Mutation', createPasswordRecoveryRequest: boolean };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginPayload', user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, createdAt: string, is2faEnabled?: boolean | null } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RecoverPasswordMutationVariables = Exact<{
  input: RecoverPasswordInput;
}>;


export type RecoverPasswordMutation = { __typename?: 'Mutation', recoverPassword: boolean };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterPayload', user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, createdAt: string } } };

export type ValidateOtpMutationVariables = Exact<{
  input: ValidateOtpInput;
}>;


export type ValidateOtpMutation = { __typename?: 'Mutation', validateOtp: { __typename?: 'ValidateOtpPayload', user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string } } };

export type VerifyPasswordRecoveryTokenMutationVariables = Exact<{
  input: VerifyPasswordRecoveryInput;
}>;


export type VerifyPasswordRecoveryTokenMutation = { __typename?: 'Mutation', verifyPasswordRecoveryToken: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, fullName: string, is2faEnabled?: boolean | null, isOtpEnabled?: boolean | null, createdAt: string } };

export type SessionLoggedOutSubscriptionVariables = Exact<{
  sessionHash: Scalars['String']['input'];
}>;


export type SessionLoggedOutSubscription = { __typename?: 'Subscription', sessionLoggedOut: { __typename?: 'SessionLoggedOutPayload', sessionHash: string, logoutAt: string } };

export type BinaryFileFieldsFragment = { __typename?: 'BinaryFile', id: string, url?: string | null, downloadUrl?: string | null, meta: { __typename?: 'BinaryFileMeta', name?: string | null, mimeType?: string | null, size?: number | null } };

export type CreateBinaryFileMutationVariables = Exact<{
  input: CreateBinaryFileInput;
}>;


export type CreateBinaryFileMutation = { __typename?: 'Mutation', createBinaryFile: { __typename?: 'BinaryFile', isPrivate: boolean, id: string, url?: string | null, downloadUrl?: string | null, meta: { __typename?: 'BinaryFileMeta', name?: string | null, mimeType?: string | null, size?: number | null } } };

export type BinaryFileQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type BinaryFileQuery = { __typename?: 'Query', binaryFile: { __typename?: 'BinaryFile', id: string, url?: string | null, downloadUrl?: string | null, meta: { __typename?: 'BinaryFileMeta', name?: string | null, mimeType?: string | null, size?: number | null } } };

export type BinaryFilesByIdsQueryVariables = Exact<{
  ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type BinaryFilesByIdsQuery = { __typename?: 'Query', binaryFilesByIds: Array<{ __typename?: 'BinaryFile', id: string, url?: string | null, downloadUrl?: string | null, meta: { __typename?: 'BinaryFileMeta', name?: string | null, mimeType?: string | null, size?: number | null } }> };

export type ImageFieldsFragment = { __typename?: 'Image', id: string, renditions: Array<{ __typename?: 'ImageRendition', id: string, type: ImageRenditionType, url: string, meta: { __typename?: 'ImageRenditionMeta', filesize: number, mimeType: string, width: number, height: number } }> };

export type CreateImageMutationVariables = Exact<{
  input: CreateImageInput;
}>;


export type CreateImageMutation = { __typename?: 'Mutation', createImage: { __typename?: 'Image', id: string, url?: string | null } };

export type DeleteImageMutationVariables = Exact<{
  input: DeleteImageInput;
}>;


export type DeleteImageMutation = { __typename?: 'Mutation', deleteImage: { __typename?: 'DeleteImagePayload', id: string } };

export type ImageQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ImageQuery = { __typename?: 'Query', image: { __typename?: 'Image', id: string, url?: string | null } };

export type TestCreateUserMutationVariables = Exact<{
  input: TestCreateUserInput;
}>;


export type TestCreateUserMutation = { __typename?: 'Mutation', testCreateUser: { __typename?: 'User', id: string, firstName: string, lastName: string, fullName: string, email: string } };

export type TestDeleteUserPermanentlyMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type TestDeleteUserPermanentlyMutation = { __typename?: 'Mutation', testDeleteUserPermanently: { __typename?: 'TestDeleteUserPermanentlyResult', success: boolean, userId: string, userRolesDeleted: number, sessionsDeleted: number } };

export type TestLoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type TestLoginMutation = { __typename?: 'Mutation', testLogin: { __typename?: 'User', id: string, firstName: string, lastName: string, fullName: string, email: string } };

export type ListRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListRolesQuery = { __typename?: 'Query', roles: Array<{ __typename?: 'Role', id: SystemRole, title: string, type: RoleType, description?: string | null, permissions: Array<string> }> };

export type UserRoleFieldsFragment = { __typename?: 'UserRole', id: string, userId: string, roleId: SystemRole, createdAt: string, updatedAt: string };

export type CreateUserRoleMutationVariables = Exact<{
  input: CreateUserRoleInput;
}>;


export type CreateUserRoleMutation = { __typename?: 'Mutation', createUserRole: { __typename?: 'UserRole', id: string, userId: string, roleId: SystemRole, createdAt: string, updatedAt: string } };

export type UpdateUserRoleMutationVariables = Exact<{
  input: UpdateUserRoleInput;
}>;


export type UpdateUserRoleMutation = { __typename?: 'Mutation', updateUserRole: { __typename?: 'UserRole', id: string, userId: string, roleId: SystemRole, createdAt: string, updatedAt: string } };

export type ListUserRolesQueryVariables = Exact<{
  filter?: InputMaybe<UserRolesFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ListUserRolesQuery = { __typename?: 'Query', userRoles: { __typename?: 'PaginatedUserRoles', items: Array<{ __typename?: 'UserRole', id: string, userId: string, roleId: SystemRole, createdAt: string, updatedAt: string }>, pageInfo: { __typename?: 'OffsetPaginationPageInfo', page: number, limit: number, totalItems: number, totalPages: number } } };

export type UserFieldsFragment = { __typename?: 'User', id: string, firstName: string, lastName: string, fullName: string, email: string, status: UserStatus, type: UserType, createdAt: string, avatarId?: string | null, avatar?: { __typename?: 'Image', id: string, url?: string | null } | null };

export type ChangePasswordMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: boolean };

export type ChangeUserEmailMutationVariables = Exact<{
  input: ChangeUserEmailInput;
}>;


export type ChangeUserEmailMutation = { __typename?: 'Mutation', changeUserEmail: { __typename?: 'User', id: string, email: string } };

export type ConfigureOtpMutationVariables = Exact<{
  input: ConfigureOtpInput;
}>;


export type ConfigureOtpMutation = { __typename?: 'Mutation', configureOtp: { __typename?: 'ConfigureOtpPayload', secret: string, otpAuthUrl: string, user: { __typename?: 'User', id: string, isOtpEnabled?: boolean | null } } };

export type Disable2faMutationVariables = Exact<{
  input: Disable2faInput;
}>;


export type Disable2faMutation = { __typename?: 'Mutation', disable2fa: { __typename?: 'Disable2faPayload', user: { __typename?: 'User', id: string, isOtpEnabled?: boolean | null, is2faEnabled?: boolean | null } } };

export type DisableOtpMutationVariables = Exact<{
  input: DisableOtpInput;
}>;


export type DisableOtpMutation = { __typename?: 'Mutation', disableOtp: { __typename?: 'DisableOtpPayload', user: { __typename?: 'User', id: string, isOtpEnabled?: boolean | null, is2faEnabled?: boolean | null } } };

export type SetMyPushNotificationsMutationVariables = Exact<{
  input: SetMyPushNotificationsInput;
}>;


export type SetMyPushNotificationsMutation = { __typename?: 'Mutation', setMyPushNotifications: { __typename?: 'User', id: string, pushNotificationsEnabled: boolean } };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, firstName: string, lastName: string, is2faEnabled?: boolean | null, isOtpEnabled?: boolean | null, avatar?: { __typename?: 'Image', id: string, renditions: Array<{ __typename?: 'ImageRendition', id: string, type: ImageRenditionType, url: string, meta: { __typename?: 'ImageRenditionMeta', filesize: number, mimeType: string, width: number, height: number } }> } | null } };

export type VerifyOtpMutationVariables = Exact<{
  input: VerifyOtpInput;
}>;


export type VerifyOtpMutation = { __typename?: 'Mutation', verifyOtp: { __typename?: 'VerifyOtpPayload', user: { __typename?: 'User', id: string, isOtpEnabled?: boolean | null, is2faEnabled?: boolean | null } } };

export type GetUserQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, firstName: string, lastName: string, fullName: string, email: string, status: UserStatus, type: UserType, createdAt: string, avatarId?: string | null, is2faEnabled?: boolean | null, isOtpEnabled?: boolean | null } };

export type ListUsersQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UsersOrderBy>;
  filter?: InputMaybe<UsersFilter>;
}>;


export type ListUsersQuery = { __typename?: 'Query', users: { __typename?: 'PaginatedUsers', items: Array<{ __typename?: 'User', id: string, firstName: string, lastName: string, fullName: string, email: string, status: UserStatus, type: UserType, createdAt: string, avatarId?: string | null, avatar?: { __typename?: 'Image', id: string, url?: string | null } | null }>, pageInfo: { __typename?: 'OffsetPaginationPageInfo', page: number, limit: number, totalItems: number, totalPages: number } } };

export const BinaryFileFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BinaryFileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BinaryFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"downloadUrl"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}}]} as unknown as DocumentNode<BinaryFileFieldsFragment, unknown>;
export const ImageFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"renditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filesize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<ImageFieldsFragment, unknown>;
export const UserRoleFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserRoleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<UserRoleFieldsFragment, unknown>;
export const UserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"avatarId"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<UserFieldsFragment, unknown>;
export const CreatePasswordRecoveryRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPasswordRecoveryRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendPasswordRecoveryEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPasswordRecoveryRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreatePasswordRecoveryRequestMutation, CreatePasswordRecoveryRequestMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"is2faEnabled"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const RecoverPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"recoverPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RecoverPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recoverPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<RecoverPasswordMutation, RecoverPasswordMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const ValidateOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ValidateOtp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ValidateOtpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validateOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<ValidateOtpMutation, ValidateOtpMutationVariables>;
export const VerifyPasswordRecoveryTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"verifyPasswordRecoveryToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyPasswordRecoveryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyPasswordRecoveryToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<VerifyPasswordRecoveryTokenMutation, VerifyPasswordRecoveryTokenMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"is2faEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isOtpEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const SessionLoggedOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SessionLoggedOut"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sessionHash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionLoggedOut"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sessionHash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sessionHash"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionHash"}},{"kind":"Field","name":{"kind":"Name","value":"logoutAt"}}]}}]}}]} as unknown as DocumentNode<SessionLoggedOutSubscription, SessionLoggedOutSubscriptionVariables>;
export const CreateBinaryFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBinaryFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBinaryFileInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBinaryFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BinaryFileFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BinaryFileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BinaryFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"downloadUrl"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}}]} as unknown as DocumentNode<CreateBinaryFileMutation, CreateBinaryFileMutationVariables>;
export const BinaryFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BinaryFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"binaryFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BinaryFileFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BinaryFileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BinaryFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"downloadUrl"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}}]} as unknown as DocumentNode<BinaryFileQuery, BinaryFileQueryVariables>;
export const BinaryFilesByIdsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BinaryFilesByIds"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"binaryFilesByIds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BinaryFileFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BinaryFileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BinaryFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"downloadUrl"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}}]} as unknown as DocumentNode<BinaryFilesByIdsQuery, BinaryFilesByIdsQueryVariables>;
export const CreateImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateImageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<CreateImageMutation, CreateImageMutationVariables>;
export const DeleteImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteImageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteImageMutation, DeleteImageMutationVariables>;
export const ImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Image"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<ImageQuery, ImageQueryVariables>;
export const TestCreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TestCreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TestCreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testCreateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<TestCreateUserMutation, TestCreateUserMutationVariables>;
export const TestDeleteUserPermanentlyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TestDeleteUserPermanently"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testDeleteUserPermanently"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userRolesDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"sessionsDeleted"}}]}}]}}]} as unknown as DocumentNode<TestDeleteUserPermanentlyMutation, TestDeleteUserPermanentlyMutationVariables>;
export const TestLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TestLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<TestLoginMutation, TestLoginMutationVariables>;
export const ListRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]}}]} as unknown as DocumentNode<ListRolesQuery, ListRolesQueryVariables>;
export const CreateUserRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserRoleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUserRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserRoleFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserRoleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<CreateUserRoleMutation, CreateUserRoleMutationVariables>;
export const UpdateUserRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserRoleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserRoleFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserRoleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<UpdateUserRoleMutation, UpdateUserRoleMutationVariables>;
export const ListUserRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListUserRoles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserRolesFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userRoles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserRoleFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserRoleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<ListUserRolesQuery, ListUserRolesQueryVariables>;
export const ChangePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangePasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ChangeUserEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeUserEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangeUserEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeUserEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<ChangeUserEmailMutation, ChangeUserEmailMutationVariables>;
export const ConfigureOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfigureOtp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConfigureOtpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"configureOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isOtpEnabled"}}]}},{"kind":"Field","name":{"kind":"Name","value":"secret"}},{"kind":"Field","name":{"kind":"Name","value":"otpAuthUrl"}}]}}]}}]} as unknown as DocumentNode<ConfigureOtpMutation, ConfigureOtpMutationVariables>;
export const Disable2faDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Disable2fa"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Disable2faInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disable2fa"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isOtpEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"is2faEnabled"}}]}}]}}]}}]} as unknown as DocumentNode<Disable2faMutation, Disable2faMutationVariables>;
export const DisableOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DisableOtp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DisableOtpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disableOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isOtpEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"is2faEnabled"}}]}}]}}]}}]} as unknown as DocumentNode<DisableOtpMutation, DisableOtpMutationVariables>;
export const SetMyPushNotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetMyPushNotifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetMyPushNotificationsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setMyPushNotifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pushNotificationsEnabled"}}]}}]}}]} as unknown as DocumentNode<SetMyPushNotificationsMutation, SetMyPushNotificationsMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"is2faEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isOtpEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"renditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filesize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const VerifyOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyOtp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyOtpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isOtpEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"is2faEnabled"}}]}}]}}]}}]} as unknown as DocumentNode<VerifyOtpMutation, VerifyOtpMutationVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"avatarId"}},{"kind":"Field","name":{"kind":"Name","value":"is2faEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isOtpEnabled"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const ListUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UsersOrderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UsersFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"avatarId"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<ListUsersQuery, ListUsersQueryVariables>;