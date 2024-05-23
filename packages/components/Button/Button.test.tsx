import { mount } from "@vue/test-utils"
import type { ButtonType, ButtonSize } from "./type"
import { describe, test, it, expect, vi } from "vitest"


import Button from "./Button.vue"

describe("Button.vue", () => {
  const onClick = vi.fn();
  test("basic button", async () => {
    const wrapper = mount(() => (
      <Button type="primary" {...{ onClick }}>
        button content
      </Button>
    ));

    // class
    expect(wrapper.classes()).toContain("gz-button--primary");

    // slot
    expect(wrapper.get("button").text()).toBe("button content");

    // events
    await wrapper.get("button").trigger("click");
    expect(onClick).toHaveBeenCalledOnce();
  });

  test("disabled button", async () => {
    const wrapper = mount(() => (
      <Button disabled {...{ onClick }}>
        disabled button
      </Button>
    ));

    // class
    expect(wrapper.classes()).toContain("is-disabled");

    // attrs
    expect(wrapper.attributes("disabled")).toBeDefined();
    expect(wrapper.find("button").element.disabled).toBeTruthy();

    // events
    await wrapper.get("button").trigger("click");
    expect(onClick).toHaveBeenCalledOnce();
    expect(wrapper.emitted("click")).toBeUndefined();
  });

  test.skip("loading button", () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
      },
      slots: {
        default: "loading button",
      },
      global: {
        stubs: ["ErIcon"],
      },
    });

    // class
    expect(wrapper.classes()).toContain("is-loading");

    // attrs
    expect(wrapper.attributes("disabled")).toBeDefined();
    expect(wrapper.find("button").element.disabled).toBeTruthy();

    // events
    wrapper.get("button").trigger("click");
    expect(wrapper.emitted()).not.toHaveProperty("click");

  });

  // Props: type
  it("should has the correct type class when type prop is set", () => {
    const types = ["primary", "success", "warning", "danger", "info"];
    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: { type: type as ButtonType },
      });
      expect(wrapper.classes()).toContain(`gz-button--${type}`);
    });
  });

  // Props: size
  it("should has the correct size class when size prop is set", () => {
    const sizes = ["large", "default", "small"];
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size: size as ButtonSize },
      });
      expect(wrapper.classes()).toContain(`gz-button--${size}`);
    });
  });

  // Props: plain, round, circle
  it.each([
    ["plain", "is-plain"],
    ["round", "is-round"],
    ["circle", "is-circle"],
    ["disabled", "is-disabled"],
    ["loading", "is-loading"],
  ])(
    "should has the correct class when prop %s is set to true",
    (prop, className) => {
      const wrapper = mount(Button, {
        props: { [prop]: true },
        global: {
          stubs: ["ErIcon"],
        },
      });
      expect(wrapper.classes()).toContain(className);
    }
  );

  it("should has the correct native type attribute when native-type prop is set", () => {
    const wrapper = mount(Button, {
      props: { nativeType: "submit" },
    });
    expect(wrapper.element.tagName).toBe("BUTTON");
    expect((wrapper.element as any).type).toBe("submit");
  });

  // Test the click event with and without throttle
  it.each([
    ["withoutThrottle", false],
    ["withThrottle", true],
  ])("emits click event %s", async (_, useThrottle) => {
    const clickSpy = vi.fn();
    const wrapper = mount(() => (
      <Button
        onClick={clickSpy}
        {...{
          useThrottle,
          throttleDuration: 400,
        }}
      />
    ));

    await wrapper.get("button").trigger("click");
    expect(clickSpy).toHaveBeenCalled();
  });

  // Props: tag
  it("should renders the custom tag when tag prop is set", () => {
    const wrapper = mount(Button, {
      props: { tag: "a" },
    });
    expect(wrapper.element.tagName.toLowerCase()).toBe("a");
  });

  // Events: click
  it("should emits a click event when the button is clicked", async () => {
    const wrapper = mount(Button, {});
    await wrapper.trigger("click");
    expect(wrapper.emitted().click).toHaveLength(1);
  });

});