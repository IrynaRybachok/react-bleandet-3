import {
  Container,
  CountryInfo,
  GoBackBtn,
  Heading,
  Loader,
  Section,
} from 'components';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';

export const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const goBackLink = useRef(location.state || '/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCountry(countryId);

        setCountry(data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackLink.current} />
        {isError && <Heading title={isError} bottom />}
        {isLoading && <Loader />}
        {country && <CountryInfo {...country} />}
      </Container>
    </Section>
  );
};
