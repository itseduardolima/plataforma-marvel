import { useState } from "react";
import {
  CustomSelectContainer,
  CustomSelectOption,
  CustomSelectOptions,
  CustomSelectValue,
  MainContainer,
} from "./styled";
import arrowFilter from "../../assets/images/arrow-filter.svg";

interface CustomSelectProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}

export const CustomSelect = ({
  options,
  value,
  onChange,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MainContainer>
      <CustomSelectContainer>
        <CustomSelectValue isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Filtrar por" : value}
          <img src={arrowFilter} alt="OpenFilter" />
        </CustomSelectValue>

        {isOpen && (
          <CustomSelectOptions>
            {options.map((option) => (
              <CustomSelectOption
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </CustomSelectOption>
            ))}
          </CustomSelectOptions>
        )}
      </CustomSelectContainer>
    </MainContainer>
  );
};
