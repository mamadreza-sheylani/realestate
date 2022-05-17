import { Box, Flex, Text, Avatar, Spacer } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/imageScrollbar";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {
  return (
    <Box
      minH={400}
      margin="auto"
      p="4"
      border="1px"
      borderColor="gray.200"
      borderRadius={8}
      marginTop="3"
      marginBottom={3}
    >
      {photos && <ImageScrollbar data={photos} />}
      <Box w="full" marginTop={4} p="6">
        <Flex paddingTop={2} alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight={3} color="green.400">
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="large">
              AED {millify(price)}
              {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
          <Box>
            <Avatar size="sm" src={agency?.logo?.url} />
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          padding="1"
          justifyContent="space-between"
          w="250px"
          color="blue.400"
        >
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
          <BsGridFill />
        </Flex>
        <Box marginTop={2}>
          <Text fontSize="lg" fontWeight="medium" marginTop={4}>
            {title}
          </Text>
          <Text fontSize="lg" color="gray.600" marginTop={4}>
            {description}
          </Text>
        </Box>
        <Flex
          flexWrap="wrap"
          textTransform="uppercase"
          justifyContent="space-between"
          marginTop={5}
          border="1px"
          borderColor="gray.200"
          p="4"
          borderRadius="8px"
        >
          <Flex
            justifyContent="space-between"
            w="400px"
            borderBottom="1"
            borderColor="gray.100"
            marginBottom={5}
          >
            <Text>Type</Text>
            <Text fontWeight="bold">{type}</Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            w="400px"
            borderBottom="1"
            borderColor="gray.100"
            marginBottom={5}
          >
            <Text>Purpose</Text>
            <Text fontWeight="bold">{purpose}</Text>
          </Flex>
          {furnishingStatus && (
            <Flex
              justifyContent="space-between"
              w="400px"
              borderBottom="1"
              borderColor="gray.100"
              marginBottom={5}
            >
              <Text>Furnishing Status</Text>
              <Text fontWeight="bold">{furnishingStatus}</Text>
            </Flex>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
