export const email_regex =
  /^[a-zA-Z0-9](\.?[a-zA-Z0-9_-])*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

export const pw_regex =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_\-+=\[\]{}|\\;:'"<>,.?/]).{8,15}$/;

export const nickname_regex = /^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,10}$/;
