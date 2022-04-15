pragma solidity ^0.4.21;
pragma experimental ABIEncoderV2;

contract AtysHome {

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    event NewAnnouncement(
        uint announcementId,
        string title,
        string adresse,
        string description,
        uint price);

    struct Announcement {
        uint price;
        string title;
        string adresse;
        uint size;
        string description;
    }

    Announcement[] private announcements;

    mapping (uint => address) public announcementToOwner;
    mapping (address => uint) ownerannouncementCount;

    function createAnnouncement(uint _price, string _title, string _adresse, uint _size, string _description) public {
        uint announcementId = announcements.push(Announcement(_price, _title, _adresse, _size, _description)) - 1;
        announcementToOwner[announcementId] = msg.sender;
        ownerannouncementCount[msg.sender]++;
        emit NewAnnouncement(announcementId, _title, _adresse, _description, _price);
    }

    function getAnnouncements() public view returns (Announcement[] memory) {
        return announcements;
    }

    function buyAnnouncement (uint _announcementId, uint _amount) public payable {
        address receiver = announcementToOwner[_announcementId];
        receiver.transfer(_amount);
    }
}