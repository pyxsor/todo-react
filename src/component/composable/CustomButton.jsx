import {forwardRef} from "react";
import {Button} from '@headlessui/react'

export default forwardRef(function CustomButton({className, ...props}, ref) {
    return (
        <Button
            {...props}
            ref={ref}
            className={
                "rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 " +
                className
            }
        >
            {props.children}
        </Button>
    );
});
