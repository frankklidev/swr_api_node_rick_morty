import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useCharacters = (pageIndex) => {
  const { data, error } = useSWR(
    `https://rickandmortyapi.com/api/character/?page=${pageIndex}`,
    fetcher
  );

  return {
    characters: data ? data.results : [],
    isLoading: !data && !error,
    isError: error
  };
};
