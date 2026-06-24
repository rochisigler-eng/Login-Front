

const Smile = () => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="80"
            height="80"
            fill="none"
        >
            {/* cara */}
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke="#2563EB"
                strokeWidth="1.5"
            />

            {/* ojos */}
            <path
                d="M9 10.5C9.6 9.8 10.4 9.8 11 10.5"
                stroke="#2563EB"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M13 10.5C13.6 9.8 14.4 9.8 15 10.5"
                stroke="#2563EB"
                strokeWidth="1.5"
                strokeLinecap="round"
            />

            {/* sonrisa */}
            <path
                d="M8 14c1.2 2 6.8 2 8 0"
                stroke="#2563EB"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    )
}

export default Smile


