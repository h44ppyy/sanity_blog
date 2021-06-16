import { SanityClient } from "@sanity/client";

export default SanityClient({
    projectID: "ehsvtdcd",
    dataset: "production",
    useCdn: true,
});