function Checkbox({ className, ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                "border w-4 h-4 focus:outline-none !border-primary focus:border-primary px-2 py-0.5 rounded-none text-gray-600 text-sm accent-primary " +
                className
            }
        />
    );
}
export default Checkbox;