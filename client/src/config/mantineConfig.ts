import { DateInput } from "@mantine/dates";
import { 
  createTheme, Input, NumberInput, PasswordInput, 
  Select, Textarea, TextInput 
} from "@mantine/core";

const themeMantine = createTheme({
  components: {
    Input: Input.extend({
      classNames: (_theme, props) => ({
        input: `bg-gray-50 text-gray-800 border-gray-400 focus:border-blue-600 focus:ring-1 
          focus:ring-blue-600 placeholder:text-gray-500 dark:focus:border-gray-200
          dark:focus:ring-gray-200 dark:bg-gray-900 dark:text-gray-200 
          dark:placeholder:text-gray-400 dark:border-gray-600 
          ${props.error && `placeholder:text-red-500 border-red-600 focus:border-red-600
            focus:ring-red-600 dark:placeholder:text-red-300 dark:border-red-500
            dark:focus:border-red-500 dark:focus:ring-red-500
          `}
        `
      })
    }),

    TextInput: TextInput.extend({
      classNames: {
        root: "w-full",
        label: "mb-1 dark:text-white",
        description: "text-gray-500 dark:text-gray-400",
        required: "text-red-600 dark:text-red-500 font-bold",
        error: "text-sm text-red-600 dark:text-red-500"
      }
    }),

    PasswordInput: PasswordInput.extend({
      classNames: {
        root: "w-full",
        label: "mb-1 dark:text-white",
        description: "text-gray-500 dark:text-gray-400",
        required: "text-red-600 dark:text-red-500 font-bold",
        error: "text-sm text-red-600 dark:text-red-500",
      }
    }),

    Select: Select.extend({
      defaultProps: {
        comboboxProps: {
          withinPortal: false
        }
      },
      classNames: {
        root: "w-full",
        label: "mb-1 dark:text-white",
        description: "text-gray-500 dark:text-gray-400",
        required: "text-red-600 dark:text-red-500 font-bold",
        dropdown: "border-gray-400 dark:bg-gray-900 dark:text-gray-200",
        option: "hover:bg-blue-500 hover:bg-opacity-10 dark:hover:bg-dark-800",
        error: "text-sm text-red-600 dark:text-red-500"
      }
    }),

    Textarea: Textarea.extend({
      classNames: {
        root: "w-full",
        label: "mb-1 dark:text-white",
        description: "text-gray-500 dark:text-gray-400",
        required: "text-red-600 dark:text-red-500 font-bold",
        error: "text-sm text-red-600 dark:text-red-500"
      }
    }),

    NumberInput: NumberInput.extend({
      classNames: (_theme, props) => ({
        root: "w-full",
        label: "mb-1 dark:text-white",
        description: "text-gray-500 dark:text-gray-400",
        required: "text-red-600 dark:text-red-500 font-bold",
        error: "text-sm text-red-600 dark:text-red-500",
        control: `text-gray-600 border-gray-400 hover:bg-gray-200 
          dark:text-gray-400 dark:border-gray-600 dark:hover:bg-dark-800
          ${props.error && `text-red-600 dark:text-red-500 border-red-600 dark:border-red-500`}
        `
      })
    }),

    DateInput: DateInput.extend({
      defaultProps: {
        popoverProps: {
          withinPortal: false,
          classNames: {
            dropdown: "border-gray-400 dark:bg-gray-900 dark:border-gray-600"
          }
        }
      },
      classNames: {
        label: "mb-1 dark:text-white",
        description: "text-gray-500 dark:text-gray-400",
        required: "text-red-600 dark:text-red-500 font-bold",
        error: "text-sm text-red-600 dark:text-red-500",
        calendarHeader: "dark:text-white",
        calendarHeaderControl: "dark:text-gray-200 dark:hover:bg-dark-800",
        calendarHeaderLevel: "dark:hover:bg-dark-800",
        monthsListControl: "dark:text-gray-300 dark:hover:bg-dark-800",
        yearsListControl: "dark:text-gray-300 dark:hover:bg-dark-800",
        weekday: "dark:text-gray-400",
        day: "dark:text-gray-300 dark:hover:bg-dark-800"
      }
    })
  }
});

export default themeMantine;