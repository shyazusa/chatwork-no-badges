$(function() {
  var addAddButton, addBrTag, addRemoveButton, addRoomId, addSaveButton, saveRoomIds;
  addBrTag = function() {
    var roomIdLength;
    roomIdLength = $('.roomId').length;
    return $('<br>').appendTo(`#roomId_${roomIdLength}`);
  };
  addAddButton = function() {
    return $('<input>', {
      id: 'add',
      type: 'button',
      value: 'Add'
    }).appendTo('#mainSetting');
  };
  addSaveButton = function() {
    return $('<input>', {
      id: 'save',
      type: 'button',
      value: 'Save'
    }).appendTo('#mainSetting');
  };
  addRemoveButton = function(roomIdLength) {
    return $('<input>', {
      class: 'delete',
      type: 'button',
      "data-id": roomIdLength,
      value: 'Delete'
    }).appendTo(`#roomId_${roomIdLength}`);
  };
  addRoomId = function(rid) {
    var roomIdLength;
    roomIdLength = $('.roomId').length;
    $('<div>', {
      id: `roomId_${roomIdLength}`,
      class: 'roomId'
    }).appendTo('#roomIds');
    if (rid) {
      $('<input>', {
        class: `roomId ${rid}`,
        type: 'text',
        value: rid
      }).appendTo(`#roomId_${roomIdLength}`);
    } else {
      $('<input>', {
        id: `roomId_${roomIdLength}`,
        class: 'roomId',
        type: 'text'
      }).appendTo(`#roomId_${roomIdLength}`);
    }
    addRemoveButton(`${roomIdLength}`);
    return addBrTag();
  };
  saveRoomIds = function() {
    var roomIds;
    roomIds = [];
    $('#roomIds').children('div').each(function(i) {
      var v;
      v = $(this).children('input').val();
      if (!isNaN(v)) {
        return roomIds[`${i}`] = v;
      }
    });
    return chrome.storage.local.set({
      rids: roomIds.join(',')
    });
  };
  $(document).on('click', '#add', function() {
    return addRoomId();
  });
  $(document).on('click', '.delete', function() {
    var roomIdLength;
    roomIdLength = $(this).data().id;
    $(`#roomId_${roomIdLength}`).remove();
    return saveRoomIds();
  });
  $(document).on('click', '#save', function() {
    return saveRoomIds();
  });
  chrome.storage.local.get(function(item) {
    var j, len, results, rid, rids;
    rids = item.rids.split(',');
    if (rids) {
      results = [];
      for (j = 0, len = rids.length; j < len; j++) {
        rid = rids[j];
        results.push(addRoomId(rid));
      }
      return results;
    }
  });
  addBrTag();
  addAddButton();
  return addSaveButton();
});
