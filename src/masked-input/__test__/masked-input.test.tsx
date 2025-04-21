import { createRef, useState } from "react";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MaskedInput } from "../masked-input";

describe("MaskedInput", () => {
  it("should renders Input", async () => {
    const TestComponent = () => {
      const [value, setValue] = useState("12a3");

      return (
        <MaskedInput
          mask="____"
          placeholder="_"
          pattern={"\\d"}
          value={value}
          onChange={(event, data) => setValue(data.cleanValue)}
        />
      );
    };

    const { queryAllByTestId, getByTestId } = render(<TestComponent />);

    expect(queryAllByTestId("input")).toHaveLength(1);
    expect((getByTestId("base-input:field") as HTMLInputElement).value).toBe(
      "123",
    );

    await userEvent.type(getByTestId("base-input:field"), "foo4_5_6");
    expect((getByTestId("base-input:field") as HTMLInputElement).value).toBe(
      "1234",
    );
  });

  it("should work as uncontrolled", async () => {
    const TestComponent = () => {
      const [value, setValue] = useState("12a3");

      return (
        <MaskedInput
          mask="____"
          placeholder="_"
          pattern={"\\d"}
          value={value}
          onChange={(event, data) => setValue(data.cleanValue)}
        />
      );
    };

    const { queryAllByTestId, getByTestId } = render(<TestComponent />);

    expect(queryAllByTestId("input")).toHaveLength(1);
    expect((getByTestId("base-input:field") as HTMLInputElement).value).toBe(
      "123",
    );

    await userEvent.type(getByTestId("base-input:field"), "foo4_5_6");
    expect((getByTestId("base-input:field") as HTMLInputElement).value).toBe(
      "1234",
    );
  });

  it("should work as uncontrolled without defaultValue", async () => {
    const spy = jest.fn();
    const { queryAllByTestId, getByTestId } = render(
      <MaskedInput
        mask="____"
        placeholder="_"
        pattern={"\\d"}
        onChange={spy}
      />,
    );

    expect(queryAllByTestId("input")).toHaveLength(1);
    expect((getByTestId("base-input:field") as HTMLInputElement).value).toBe(
      "",
    );

    await userEvent.type(getByTestId("base-input:field"), "foo4_5_6");
    expect((getByTestId("base-input:field") as HTMLInputElement).value).toBe(
      "456",
    );
  });

  it("should apply digits only mask by default", async () => {
    const spy = jest.fn();
    const { queryAllByTestId, getByTestId } = render(
      <MaskedInput mask="___" onChange={spy} />,
    );

    expect(queryAllByTestId("input")).toHaveLength(1);
    expect((getByTestId("base-input:field") as HTMLInputElement).value).toBe(
      "",
    );

    await userEvent.type(getByTestId("base-input:field"), "AAA3G5__4");
    expect((getByTestId("base-input:field") as HTMLInputElement).value).toBe(
      "354",
    );
  });

  it('should handle "inputRef" prop', () => {
    const ref = createRef<HTMLInputElement>();
    const { getByTestId } = render(<MaskedInput mask="___" inputRef={ref} />);

    expect(ref.current instanceof HTMLInputElement).toBe(true);
    expect(getByTestId("base-input:field") === ref.current).toBe(true);
  });

  it('should handle "onBlur" prop', () => {
    const spy = jest.fn();
    const { getByTestId } = render(<MaskedInput mask="____" onBlur={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.blur(getByTestId("base-input:field"));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle "baseInputProps.restPlaceholder" prop', () => {
    const { rerender, getByTestId, queryAllByTestId } = render(
      <MaskedInput mask="____" value="22" onChange={jest.fn()} />,
    );

    expect(getByTestId("rest-placeholder-shift").textContent).toBe("22");
    expect(getByTestId("rest-placeholder").textContent).toBe("__");

    rerender(
      <MaskedInput
        mask="____"
        value="22"
        onChange={jest.fn()}
        baseInputProps={{
          restPlaceholder: { value: "", shiftValue: "" },
        }}
      />,
    );

    expect(queryAllByTestId("rest-placeholder-shift")).toHaveLength(0);
    expect(queryAllByTestId("rest-placeholder")).toHaveLength(0);
  });

  it("should handle undefined as value during rerender", () => {
    const spy = jest.fn();

    const { rerender, getByTestId } = render(
      <MaskedInput mask="_-_-_-_" value="2222" onChange={spy} />,
    );

    expect((getByTestId("base-input:field") as HTMLInputElement).value).toBe(
      "2-2-2-2",
    );

    rerender(<MaskedInput mask="_-_-_-_" value="3333" onChange={spy} />);

    expect((getByTestId("base-input:field") as HTMLInputElement).value).toBe(
      "3-3-3-3",
    );

    rerender(<MaskedInput mask="_-_-_-_" value={undefined} onChange={spy} />);

    expect((getByTestId("base-input:field") as HTMLInputElement).value).toBe(
      "",
    );
  });

  it('should handle "filledMaskMinLength" prop', () => {
    const spy = jest.fn();
    const { getByTestId, rerender } = render(
      <MaskedInput
        mask="_______________"
        filledMaskMinLength={5}
        value="1234"
        onBlur={spy}
      />,
    );

    fireEvent.blur(getByTestId("base-input:field"));

    expect(spy).toHaveBeenCalledWith(expect.any(Object), {
      cleanValue: "1234",
      completed: false,
      value: "1234",
    });

    rerender(
      <MaskedInput
        mask="_______________"
        filledMaskMinLength={5}
        value="12345"
        onBlur={spy}
      />,
    );

    fireEvent.blur(getByTestId("base-input:field"));

    expect(spy).toHaveBeenCalledWith(expect.any(Object), {
      cleanValue: "12345",
      completed: true,
      value: "12345",
    });
  });
});
