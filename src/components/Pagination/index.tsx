import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Link, useRouteMatch } from "react-router-dom";

interface PaginationProps {
  activePage: number;
  totalPageNumber: number;
  onPageChanged?: (activePage: number) => void;
  showDetails?: boolean;
}

const Pagination = ({ activePage = 1, totalPageNumber, onPageChanged = () => {}, showDetails = false }: PaginationProps) => {
  const { url } = useRouteMatch();
  const previousPage = activePage - 1;
  const nextPage = activePage + 1;
  const isFirstPage = activePage === 1;
  const isLastPage = totalPageNumber === activePage;

  return (
    <div className={showDetails ? "py-3 bg-white flex items-center justify-between border-t border-gray-200 sm:px-6" : ""}>
      <div>
        {showDetails && (
          <p className="text-sm text-gray-700">
            Sayfa{" "}
            <span className="font-medium">
              {activePage} / {totalPageNumber}
            </span>
          </p>
        )}
      </div>
      <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
        <Link
          to={`${url}?page=${previousPage}`}
          className={`inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50 ${
            isFirstPage ? "text-gray-300 pointer-events-none" : "text-gray-500"
          }`}
          onClick={() => !isFirstPage && onPageChanged(previousPage)}
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </Link>
        {totalPageNumber < 100 ? (
          Array.from(Array(totalPageNumber).keys()).map((item, index) => {
            const pageNumber = index + 1;
            const isActive = activePage === pageNumber;
            return (
              <Link
                key={index}
                to={`${url}?page=${pageNumber}`}
                className={`bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                  isActive ? "border-blue-500 text-blue-500" : ""
                }`}
                onClick={() => onPageChanged(pageNumber)}
              >
                {pageNumber}
              </Link>
            );
          })
        ) : (
          <>
            {Array.from(Array(6).keys()).map((item, index) => {
              const pageNumber = index + 1;
              const isActive = activePage === pageNumber;
              return (
                <Link
                  key={index}
                  to={`${url}?page=${pageNumber}`}
                  className={`bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                    isActive ? "border-blue-500 text-blue-500" : ""
                  }`}
                  onClick={() => onPageChanged(pageNumber)}
                >
                  {pageNumber}
                </Link>
              );
            })}
            <Link
              to={`${url}`}
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium pointer-events-none"
            >
              ...
            </Link>
            <Link
              to={`${url}?page=${totalPageNumber}`}
              className={`bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                isLastPage ? "border-blue-500 text-blue-500" : ""
              }`}
              onClick={() => onPageChanged(totalPageNumber)}
            >
              {totalPageNumber}
            </Link>
          </>
        )}
        <Link
          to={`${url}?page=${nextPage}`}
          className={`inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50 ${
            isLastPage ? "text-gray-300 pointer-events-none" : "text-gray-500"
          }`}
          onClick={() => !isLastPage && onPageChanged(nextPage)}
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </Link>
      </nav>
    </div>
  );
};

export default Pagination;
