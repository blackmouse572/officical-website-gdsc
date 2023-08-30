'use clienten';
import { Button, ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { ChevronDownIcon } from 'lucide-react';
import React, { Key, useCallback } from 'react';
import { toTitleCase } from '../lib/helper';

type Props = {
  options: Set<Key>;
  labelMap: Record<string, string>;
  descriptionMap?: Record<string, string>;
  defaultOption?: Key;
  onChange: (option: Key) => void;
  onClick: (option: Key) => void;
} & React.ComponentProps<typeof Button>;

function SavePostButton({
  variant,
  color,
  labelMap,
  descriptionMap,
  onChange,
  onClick,
  options,
  defaultOption,
  ...props
}: Props) {
  const [selectedOption, setSelectedOption] = React.useState(new Set<Key>([defaultOption || Array.from(options)[0]]));

  const handleOptionChange = (option: 'all' | Set<Key>) => {
    //Convert Set<Key> to Set<string>
    const set = new Set<string>();
    if (option === 'all') return;
    option.forEach((key) => set.add(key.toString()));
    //Update state
    setSelectedOption(set);
    onChange(Array.from(set)[0]);
  };

  const selectedOptionValue = useCallback(() => {
    return Array.from(selectedOption)[0];
  }, [selectedOption]);

  return (
    <ButtonGroup variant="flat">
      <Button
        color="success"
        onClick={() => {
          onClick(selectedOptionValue());
        }}
        {...props}
      >
        {toTitleCase(labelMap[selectedOptionValue()])}
      </Button>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button isIconOnly color="success" {...props}>
            <ChevronDownIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          disallowEmptySelection
          aria-label="Merge options"
          selectedKeys={selectedOption}
          selectionMode="single"
          onSelectionChange={handleOptionChange}
          className="max-w-[300px]"
          color="success"
          variant="faded"
        >
          {Array.from(options).map((option) => (
            <DropdownItem key={option} value={option}>
              <div className="flex flex-col">
                <span className="font-semibold">{toTitleCase(labelMap[option.toString()])}</span>
                <span className="text-xs text-stone-500">{descriptionMap && descriptionMap[option.toString()]}</span>
              </div>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
}

export default SavePostButton;
