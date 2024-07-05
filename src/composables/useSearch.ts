import { useRouteQuery } from '@vueuse/router';
import { ref, unref } from 'vue';

const randomSearchTerms = ['action', 'comedy', 'drama', 'adventure'];
const search = ref('');

export default function useSearch() {
  const searchInQuery = unref(useRouteQuery('q'));
  search.value = searchInQuery ? searchInQuery.toString() : '';

  if (search.value === '') {
    search.value = randomSearchTerms[Math.floor(Math.random() * randomSearchTerms.length)];
  }

  const setSearchTerm = (term: string) => {
    search.value = term;
  };

  return {
    search,
    setSearchTerm,
  };
}
