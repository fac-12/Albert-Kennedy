/* Dummy object */
const mentorObject = {
  1: {
    id: 1,
    name: "Nadia",
    imageURL: "",
    description:
      "Hi! I’m Nadia, I’ve been working as a mentor with ATK for 5 years. I love puppies and helping people!"
  },
  2: {
    id: 2,
    name: "Gill",
    imageURL: "",
    description:
      "I’m Gill, I’ve had a lot of experience working with young people, both professionally and as a mum of five!"
  }
};

export default (state = {}, action) => {
  return mentorObject;
};
