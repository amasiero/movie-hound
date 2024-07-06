import { useRouteQuery } from '@vueuse/router';
import { ref, unref } from 'vue';

const randomSearchTerms = ['action', 'comedy', 'drama', 'adventure'];
const search = ref('');

const setRandomSearchTerm = () =>
  (search.value = randomSearchTerms[Math.floor(Math.random() * randomSearchTerms.length)]);

export default function useSearch() {
  const searchInQuery = unref(useRouteQuery('q'));
  search.value = searchInQuery ? searchInQuery.toString() : '';

  if (search.value === '') {
    setRandomSearchTerm();
  }

  const setSearchTerm = (term = '') => {
    if (term === '') {
      setRandomSearchTerm();
      return;
    }
    search.value = term;
  };

  return {
    search,
    setSearchTerm,
  };
}
