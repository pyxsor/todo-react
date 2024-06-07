function Card({ children, className = "" }) {
    return (
        <div
            className={
                "max-lg:bg-light-gray/80 bg-white/70 shadow-xl border p-4 " +
                className
            }
        >
            {children}
        </div>
    );
}

export default Card;