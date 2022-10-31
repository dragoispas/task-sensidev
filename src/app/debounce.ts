import { useEffect, useState } from "react";

export const useDebounce = (value: any, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
        () => {
            const timeoutId = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            return () => {
                clearTimeout(timeoutId);
            };
        },
        [value, delay]
    );

    return debouncedValue;
};