/*!
 * Copyright (c) 2020 Justin Johansson
 */

const tap: any = require('tap');

export interface Test {
  deepEqual<A>(found: unknown, wanted: A, message?: string, extra?: AssertOptions): boolean;
  doesNotThrow(fn?: (a: unknown) => unknown, message?: string, extra?: Options.Assert): boolean;
  equal<A>(found: unknown, wanted: A, message?: string, extra?: AssertOptions): boolean;
  end(): void;
  fail(message?: string, extra?: AssertOptions): boolean;
  pass(message?: string, extra?: AssertOptions): boolean;
  plan(n: number, comment?: string): void;
  throws(
    fn?: (a: unknown) => unknown,
    expectedError?: Error,
    message?: string,
    extra?: Options.Assert
  ): boolean;
}

export interface AssertOptions {
  todo?: boolean | string;
  skip?: boolean | string;
}

export interface TestOptions {
  name?: string;
  timeout?: number;
  bail?: boolean;
  autoend?: boolean;
}

export namespace Assertions {
  export type Basic = (obj: unknown, message?: string, extra?: Options.Assert) => boolean;

  export type Throws = (
    fn?: (a: unknown) => unknown,
    expectedError?: Error,
    message?: string,
    extra?: Options.Assert
  ) => boolean;

  export type DoesNotThrow = (
    fn?: (a: unknown) => unknown,
    message?: string,
    extra?: Options.Assert
  ) => boolean;

  export type Equal = (
    found: unknown,
    wanted: unknown,
    message?: string,
    extra?: Options.Assert
  ) => boolean;

  export type NotEqual = (
    found: unknown,
    notWanted: unknown,
    message?: string,
    extra?: Options.Assert
  ) => boolean;

  export type Match = (
    found: unknown,
    pattern: unknown,
    message?: string,
    extra?: Options.Assert
  ) => boolean;

  export type Type = (
    found: unknown,
    type: string | ((a: unknown) => unknown),
    message?: string,
    extra?: Options.Assert
  ) => boolean;
}

export namespace Options {
  export interface Bag {
    [propName: string]: unknown;
  }

  export interface Pragma {
    [propName: string]: boolean;
  }

  export interface Assert extends Bag {
    todo?: boolean | string;
    skip?: boolean | string;
  }

  export interface Spawn extends Assert {
    bail?: boolean;
    timeout?: number;
  }

  export interface Test extends Assert {
    name?: string;
    timeout?: number;
    bail?: boolean;
    autoend?: boolean;
  }
}

export function test(
  name: string,
  extra?: TestOptions,
  cb?: (t: Test) => Promise<unknown> | void
): Promise<unknown>;

export function test(name: string, cb?: (t: Test) => Promise<unknown> | void): Promise<unknown>;

export function test(name: unknown, cb?: unknown): unknown {
  return tap.test(name, cb);
}
