import { useRouter } from "next/router";

interface PopupProps {
  content: string;
  setPopup: (value: boolean) => void;
}

const Popup: React.FC<PopupProps> = ({ content, setPopup }) => {
  return (
    <div
      id="info-popup"
      className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50"
    >
      <div className="p-4 max-w-xl bg-white rounded-lg shadow">
        <div className="p-4">
          <h3 className="mb-2 text-2xl font-bold text-gray-900">Alert</h3>
          <p className="text-gray-500">{content}</p>
        </div>
        <div className="flex p-2">
          {" "}
          {/* Reduced padding */}
          <button
            type="button"
            className="py-2 px-4 mr-2 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-primary-300 hover:text-gray-900"
            onClick={() => setPopup(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="py-2 px-4 text-sm font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none"
            onClick={handleDirect}
          >
            Proceed to favorites page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
