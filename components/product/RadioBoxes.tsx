import clsx from "clsx";
import { RadioGroup, Radio, Label, Description } from "@headlessui/react";
import { formatCurrency, getPlanFrequency } from "@/lib/utils";

type RadioBoxesProps = {
  label: string;
  options: any[];
  selectedSize?: any;
  selected: any;
  setSelected: any;
};

const RadioBoxes = ({
  label,
  options = [],
  selectedSize,
  selected,
  setSelected,
}: RadioBoxesProps) => {
  return (
    <div className="sm:flex sm:justify-between">
      <RadioGroup value={selected} onChange={setSelected}>
        <Label className="mt-10 block text-base font-medium">{label}</Label>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {options.map((option) => (
            <Radio
              as="div"
              key={option.id}
              value={option}
              className={clsx(
                "data-[checked]:ring-2 data-[checked]:ring-sky-500",
                "relative block cursor-pointer rounded-lg border border-stone-300 p-4 focus:outline-none dark:border-stone-600"
              )}
            >
              {({ focus, checked }) => (
                <>
                  <Label
                    as="p"
                    className={clsx(
                      checked
                        ? "text-stone-800 dark:text-stone-200"
                        : "text-stone-500",
                      "text-sm font-medium"
                    )}
                  >
                    {option.billingSchedule
                      ? `Every ${getPlanFrequency(option)}`
                      : option.name}
                  </Label>
                  <Description
                    as="p"
                    className={clsx(
                      checked
                        ? "text-stone-800 dark:text-stone-200"
                        : "text-stone-500",
                      "mt-1 text-[11px]"
                    )}
                  >
                    {option.billingSchedule
                      ? `${formatCurrency({
                          amount: option.price + (selectedSize?.price || 0),
                        })} / ${getPlanFrequency(option)}`
                      : option.description}
                  </Description>
                  <div
                    className={clsx(
                      focus ? "border" : "border-2",
                      checked ? "border-sky-500" : "border-transparent",
                      "pointer-events-none absolute -inset-px rounded-lg"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </Radio>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default RadioBoxes;
