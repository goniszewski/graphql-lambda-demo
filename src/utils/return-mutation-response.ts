type returnMutationResponseType<T, S extends string> = {
  code: number;
  success: boolean;
  message: string;
} & Record<S, T | null>;

export function returnMutationResponse<T, S extends string>(
  success: boolean,
  message: string,
  object: Record<S, T | null>
): returnMutationResponseType<T, S> {
  return {
    code: success ? 200 : 400,
    success,
    message,
    ...object,
  };
}
