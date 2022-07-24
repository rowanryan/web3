const truncateAddress = (
	address: string | null | undefined,
	length: number = 5
) => {
	if (!address) return "";

	return (
		address.substring(0, length) +
		"..." +
		address.substring(address.length - length)
	);
};

export default truncateAddress;
