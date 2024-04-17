import { factory } from "./factory";

let count: () => number = factory(0, 1);

const start_at_control: HTMLInputElement = document.getElementById(
  "start_at",
) as HTMLInputElement;

const step_control: HTMLInputElement = document.getElementById(
  "step",
) as HTMLInputElement;

const count_button: HTMLButtonElement = document.querySelector(
  ".count_button",
) as HTMLButtonElement;

const current_count: HTMLSpanElement = document.querySelector(
  ".current_count",
) as HTMLSpanElement;

function update_count_and_reset_counter(): void {
  count = factory(Number(start_at_control?.value), Number(step_control?.value));
  update_count();
}

start_at_control.addEventListener("change", update_count_and_reset_counter);

step_control.addEventListener("change", update_count_and_reset_counter);

function update_count(): void {
  if (current_count) {
    const current: number = count();
    current_count.innerText = current.toString();
  }
}

update_count();

count_button?.addEventListener("click", update_count);
