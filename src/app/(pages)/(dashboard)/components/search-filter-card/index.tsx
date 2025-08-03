"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useQueryState } from "nuqs";
import useDebounce from "@/hooks/use-debounce";
import { PageController } from "@/hooks/use-table-pagination";
import { scaleIn } from "@/app/(pages)/animate";

const SearchFilterCard = () => {
  const [keyword, setKeyword] = useQueryState("search");
  const [filter, setFilter] = useQueryState("filter");

  const [value, setValue] = useState<string>(keyword?.toString() || "");

  const search = useDebounce(value, 1000);
  useEffect(() => {
    if (search) {
      setKeyword(search);
    } else {
      setKeyword(null);
    }
    PageController.setPage(1);
  }, [setKeyword, search]);
  return (
    <Card
      sx={{
        mb: 4,
        animation: `${scaleIn} 0.5s ease-out forwards`,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        borderRadius: "12px",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
          }}
        >
          <Box sx={{ flex: 1, position: "relative" }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search meeting minutes..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "text.secondary" }} />
                  </InputAdornment>
                ),
                sx: {
                  height: 48,
                  pl: 1.5,
                  borderRadius: "12px",
                  "&:hover fieldset": { borderColor: "primary.light" },
                  "&.Mui-focused fieldset": {
                    borderWidth: "1px !important",
                    borderColor: "primary.main !important",
                  },
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              width: { xs: "100%", md: "auto" },
            }}
          >
            <FilterListIcon sx={{ color: "text.secondary" }} />
            <FormControl fullWidth sx={{ minWidth: 200 }}>
              <Select
                value={filter || ""}
                onChange={(e) => setFilter(e.target.value)}
                displayEmpty
                defaultValue={"all"}
                inputProps={{ "aria-label": "Department filter" }}
                sx={{
                  height: 48,
                  borderRadius: "12px",
                  "& .MuiSelect-select": {
                    display: "flex",
                    alignItems: "center",
                    py: 1.5,
                    px: 2,
                  },
                  "&:hover fieldset": { borderColor: "primary.light" },
                  "&.Mui-focused fieldset": {
                    borderWidth: "1px !important",
                    borderColor: "primary.main !important",
                  },
                }}
              >
                <MenuItem value="all">All Departments</MenuItem>
                <MenuItem value="engineering">Engineering</MenuItem>
                <MenuItem value="sales">Sales</MenuItem>
                <MenuItem value="finance">Finance</MenuItem>
                <MenuItem value="product">Product</MenuItem>
                <MenuItem value="hr">HR</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SearchFilterCard;
