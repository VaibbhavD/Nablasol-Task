import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import Navigation from "../../components/Navigation";

const Step6 = ({ onNext, onBack, Step }) => {
  // Initial state with both team members and additional suggestions combined
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "Fanny Russell", type: "team", checked: false },
    { id: 2, name: "Rodney Meyer", type: "team", checked: false },
    { id: 3, name: "Ellen Simmons", type: "team", checked: false },
    { id: 4, name: "Virgie Kim", type: "team", checked: false },
    { id: 5, name: "Emma Castro", type: "team", checked: false },
    { id: 6, name: "Steve Mathew", type: "suggestion" },
    { id: 7, name: "Robert Pattinson", type: "suggestion" },
    { id: 8, name: "Steve Waugh", type: "suggestion" },
    { id: 9, name: "Chris Evans", type: "suggestion" },
    { id: 10, name: "Scarlett Johansson", type: "suggestion" },
    // Add more names as required
  ]);

  const [selectedMembers, setSelectedMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const maxSelectedMembers = 5; // Maximum number of selected users allowed

  // Add member to the selected list
  const handleAddMember = (member) => {
    if (
      !selectedMembers.some((m) => m.id === member.id) &&
      selectedMembers.length < maxSelectedMembers
    ) {
      setSelectedMembers([...selectedMembers, member]);
      setSearchQuery("");
    }
  };

  // Remove member from the selected list
  const handleRemoveMember = (member) => {
    setSelectedMembers(selectedMembers.filter((m) => m.id !== member.id));
  };

  // Filtered list of users based on search query and excluding already selected users
  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !selectedMembers.some((m) => m.id === member.id)
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 max-w-full md:h-[600px] sm:max-w-md w-full">
        <h2 className="text-center text-lg sm:text-2xl font-bold mb-4 sm:mb-4">
          Team
        </h2>

        {/* Add Member Input */}
        <div className="relative flex flex-wrap items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
          {/* Display selected members as chips */}

          {/* Input Field for Searching and Adding New Members */}
          <div className="relative flex-grow">
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder={
                selectedMembers.length >= maxSelectedMembers
                  ? `Max ${maxSelectedMembers} members selected`
                  : "Invite or Add a person"
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={selectedMembers.length >= maxSelectedMembers}
            ></input>
            {/* Display suggestions and team members */}
            {searchQuery && filteredMembers.length > 0 && (
              <ul className="absolute z-10 bg-white border border-gray-300 mt-1 rounded w-full max-h-40 overflow-y-auto">
                {filteredMembers.map((member) => (
                  <li
                    key={member.id}
                    className="p-2 hover:bg-blue-100 cursor-pointer flex justify-between items-center"
                    onClick={() => handleAddMember(member)}
                  >
                    <span>{member.name}</span>
                    {member.type === "suggestion" && (
                      <span className="text-sm text-gray-500">Suggestion</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="h-16 overflow-auto w-full flex">
          {selectedMembers.map((member) => (
            <div
              key={member.id}
              className="flex items-center bg-blue-100 text-blue-800 rounded-full h-1/2 px-2 mr-2 mb-2"
            >
              <span className="text-sm">{member.name}</span>
              <button
                className="ml-2 text-blue-600 hover:text-blue-800"
                onClick={() => handleRemoveMember(member)}
              >
                &times;
              </button>
            </div>
          ))}
          {selectedMembers.length < 1 && (
            <div className="flex justify-center items-center w-full rounded-full h-1/2 ">
              <span className="text-md text-gray-400 flex items-center ">
                <BiUser className="mx-2" /> Select the Team Members
              </span>
            </div>
          )}
        </div>

        {/* Team Members List */}
        <ul className="space-y-2 overflow-y-auto h-[300px] mb-4">
          {teamMembers.map((member) => (
            <li
              key={member.id}
              className="flex items-center p-2 border rounded"
            >
              <input
                type="checkbox"
                checked={selectedMembers.some((m) => m.id === member.id)}
                onChange={() =>
                  handleAddMember(member)
                } /* Checkbox now adds the member if not selected */
                className="h-4 w-4"
                disabled={selectedMembers.length >= maxSelectedMembers}
              />
              <span
                className={`flex-grow text-sm sm:text-base ml-2 text-gray-800 ${
                  selectedMembers.some((m) => m.id === member.id)
                    ? "line-through text-gray-400"
                    : ""
                }`}
              >
                {member.name}
              </span>
              <button
                className="text-red-600"
                onClick={() => handleRemoveMember(member)}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>

        {/* Navigation Buttons */}
        <Navigation onNext={onNext} onBack={onBack} Step={Step} />
      </div>
    </div>
  );
};

export default Step6;
