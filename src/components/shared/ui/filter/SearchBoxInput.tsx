import useDebounce from "@/hooks/useDebounce";
import { Input } from "antd";
import { useEffect, useState } from "react";

interface SearchBoxInputProps {
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
  width?: number | string;
}

const SearchBoxInput = ({
  onSearch,
  placeholder = "Search",
  width = "200px"
}: SearchBoxInputProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    onSearch(debouncedSearchTerm as string);
  }, [debouncedSearchTerm, onSearch]);

  return (
    <Input
      placeholder={placeholder}
      style={{ width }}
      onChange={(e) => setSearchTerm(e.target.value)}
      value={searchTerm}
    />
  );
};

export default SearchBoxInput;
