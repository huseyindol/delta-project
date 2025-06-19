import useDebounce from "@/hooks/useDebounce";
import { filterUsers } from "@/store/userSlice";
import { useAppDispatch } from "@/utils/store/hooks";
import { Input } from "antd";
import { useEffect, useState } from "react";

const SearchBoxInput = () => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    dispatch(filterUsers({ searchTerm: debouncedSearchTerm as string }));
  }, [debouncedSearchTerm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Input
      placeholder="Search"
      style={{ width: "200px" }}
      onChange={(e) => handleChange(e)}
      value={searchTerm}
    />
  );
};

export default SearchBoxInput;
