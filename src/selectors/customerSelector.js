export const findCustomer = (customer, id) => {
    return customer.find(cust => cust._id === id)
}