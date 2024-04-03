"use client";

import { gql, useSuspenseQuery } from "@apollo/client";
import moment from "moment";
import { useEffect, useState } from "react";

const query = gql`
  query getReadDates($bookId: String!, $profileId: String!) {
    getReadDates(bookId: $bookId, profileId: $profileId) {
      started
      finished
    }
  }
`;

export default function ReadDate({ id }: { id: string }) {
  const [date, setDate] = useState("");
  const { data } = useSuspenseQuery(query, {
    variables: {
      bookId: id,
      profileId: process.env.NEXT_PUBLIC_LITERAL_PROFILE_ID,
    },
  });

  useEffect(() => {
    setDate((data as any)?.getReadDates?.[0]?.started);
  }, [data]);

  return (
    <>
      <p className="font-serif font-body text-lg text-highlighted">{moment(date).format("MMM Do, YYYY")}</p>
    </>
  );
}
