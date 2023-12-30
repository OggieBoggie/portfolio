
export default function DropdownMenu ({ isOpen}) {
    if (!isOpen) return null;

    return (
        <div className="absolute right-0 w-48 bg-white shadow-md mt-2 rounded-md overflow-hidden z-20">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">Home</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">About</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">Projects</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">Contact</a>
        </div>
    )
}